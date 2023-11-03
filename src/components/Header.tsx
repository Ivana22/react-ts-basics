import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

// type HeaderProps = {
//   image: {
//     src: string;
//     alt: string;
//   };
//   children: ReactNode;
// };

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
}
