
export const Image = ({ src, alt, className, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...rest} // Allows passing additional props like `loading`, `onClick`, etc.
    />
  );
};