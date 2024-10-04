"use client";

import schowcase from "@/src/assets/imgs/showcase.png";
import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";
import { Code } from "./Hero";
import { Modal } from "./Modal";

export const ShowCase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <h3 className="text-2xl font-bold mt-16">
        De 7 % de taux de conversion à plus de 50 % en seulement trois mois
      </h3>
      <p className="text-lg py-4">
        C'est l'histoire d'une start up de <Code>communication</Code>
        <Code className="text-primary font-bold">AURRA COM</Code> qui a réussi à
        augmenter ses revenus de plus de
        <Code className="text-primary">300%</Code> grâce à une interface
        utilisateur optimisée.
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-background shadow-2xl p-2 rounded-md hover:bg-primary/45 animate-in duration-200"
      >
        Lire l'histoire complète ...
      </button>
      <div className="w-full mb-16 flex justify-center items-center">
        <Image
          src={schowcase}
          alt="projet pour AURRA COM"
          width={1000}
          height={1000}
          className="rounded-md shadow-lg"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">L'histoire d'AURRA COM</h2>
        <p className="text-md md:text-lg text-muted-foreground">
          "Avant de me rencontrer, cette entreprise peinait à convertir les
          visiteurs de son site en clients. Leurs utilisateurs se perdaient dans
          une navigation peu intuitive, et les demandes de devis stagnaient. En
          repensant entièrement l'interface et en simplifiant l'expérience
          utilisateur, nous avons triplé les demandes de devis en seulement
          trois mois. Ce changement a directement augmenté leur nombre de
          clients, faisant passer les conversions de 7% à 50% par mois boostant
          ainsi leur chiffre d'affaires de manière significative."
        </p>
      </Modal>
    </Container>
  );
};
