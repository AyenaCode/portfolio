import { Container } from "./Container";

export const Footer = () => {
  return (
    <Container className="text-center mt-16 mb-2">
      <p className="border-t pt-8">
        Fait avec ❤️ par{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground underline"
        >
          @meAyenaCode
        </a>
      </p>
      <p className="text-muted-foreground">
        &copy; {new Date().getFullYear()} AyenaCode. Tous droits réservés.
      </p>
    </Container>
  );
};
