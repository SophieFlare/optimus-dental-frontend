export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#35e2c4] to-[#81f3e8] shadow-[0px_0px_12px_#81f3e8] border border-white/30">
      <div className="absolute inset-0 rounded-lg border border-white/20"></div>
      <span>{props.children}</span>
    </button>
  );
};
