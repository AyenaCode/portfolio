import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container } from "./Container";
export const Header = () => {
  return (
    <Container>
      <div className="pt-3 flex justify-between">
        <div className="font-bold">
          <Link href="/">AyenaCode</Link>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" className="size-6 p-0">
            <Link href="https://github.com/AyenaCode">
              <FaGithub />
            </Link>
          </Button>
          <Button variant="outline" className="size-6 p-0">
            <Link href="https://www.linkedin.com/in/ayeancode/">
              <FaLinkedin />
            </Link>
          </Button>
          <Button variant="outline" className="size-6 p-0">
            <Link href="https://twitter.com/AyeanCode">
              <FaTwitter />
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
