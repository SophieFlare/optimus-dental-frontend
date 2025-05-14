import * as THREE from "three";

export const GradientMaterial = new THREE.ShaderMaterial({
  uniforms: {
    color1: { value: new THREE.Color("#40E0D0") }, // turquoise
    color2: { value: new THREE.Color("#0000ff") }, // blue
    uResolution: { value: new THREE.Vector2() },
    uTime: { value: 0 },
    uDisplace: { value: 1.0 },
    uSpread: { value: 1.0 },
    uNoise: { value: 1.0 },
    uLightDirection: { value: new THREE.Vector3(1.0, 1.0, 1.0).normalize() }, // light source
  },
  vertexShader: `
    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal); // transform normal to world
        vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vNormal;

    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uDisplace;
    uniform float uSpread;
    uniform float uNoise;
    uniform vec3 uLightDirection;

    #define PI 3.14159265358979
    #define MOD3 vec3(.1031,.11369,.13787)

    vec3 hash33(vec3 p3) {
        p3 = fract(p3 * MOD3);
        p3 += dot(p3, p3.yxz + 19.19);
        return -1.0 + 2.0 * fract(vec3(
            (p3.x + p3.y) * p3.z,
            (p3.x + p3.z) * p3.y,
            (p3.y + p3.z) * p3.x
        ));
    }

    float pnoise(vec3 p) {
        vec3 pi = floor(p);
        vec3 pf = p - pi;
        vec3 w = pf * pf * (3.0 - 2.0 * pf);
        return mix(
            mix(
                mix(dot(pf - vec3(0, 0, 0), hash33(pi + vec3(0, 0, 0))),
                    dot(pf - vec3(1, 0, 0), hash33(pi + vec3(1, 0, 0))), w.x),
                mix(dot(pf - vec3(0, 0, 1), hash33(pi + vec3(0, 0, 1))),
                    dot(pf - vec3(1, 0, 1), hash33(pi + vec3(1, 0, 1))), w.x),
                w.z),
            mix(
                mix(dot(pf - vec3(0, 1, 0), hash33(pi + vec3(0, 1, 0))),
                    dot(pf - vec3(1, 1, 0), hash33(pi + vec3(1, 1, 0))), w.x),
                mix(dot(pf - vec3(0, 1, 1), hash33(pi + vec3(0, 1, 1))),
                    dot(pf - vec3(1, 1, 1), hash33(pi + vec3(1, 1, 1))), w.x),
                w.z),
            w.y
        );
    }

    void main() {
        // Pattern distortion
        float pat = pnoise(vec3(vUv * uNoise, sin(uTime) * 1.4)) * uDisplace;
        float proximity = abs(vUv.x - (0.5 + sin(uTime) / (12.0 * uSpread)));
        vec3 full = pat * vec3(clamp(0.23 * uSpread - proximity, 0.0, 1.0));

        vec3 newPosition = vPosition + vNormal * full;

        vec3 baseColor = vec3(0.188, 0.835, 0.784); // turquoise

        // Simple diffuse lighting
        float light = max(dot(normalize(vNormal), normalize(uLightDirection)), 0.0);

        // Final color with lighting + displacement pattern
        vec3 color = baseColor * light * (1.0 - full);

        gl_FragColor = vec4(color, 1.0);
    }
  `,
  side: THREE.DoubleSide,
});
