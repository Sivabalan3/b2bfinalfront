
export const View = ({children,className , ...props}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
