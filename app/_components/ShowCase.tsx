"use client";

import schowcase from "@/assets/imgs/showcase.png";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Container } from "./Container";
import { Code } from "./Hero";
import { Modal } from "./Modal";

const STATS = {
  conversionBefore: 7,
  conversionAfter: 50,
  revenueIncrease: 300,
} as const;

export const ShowCase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <Container>
      <section className="space-y-6 mb-16">
        <h3 className="text-2xl font-bold mt-16">
          De {STATS.conversionBefore} % de taux de conversion à plus de{" "}
          {STATS.conversionAfter} % en seulement trois mois
        </h3>

        <p className="text-lg">
          C'est l'histoire d'une start up de <Code>communication</Code>{" "}
          <Code className="text-primary font-bold">AURRA COM</Code> qui a réussi
          à augmenter ses revenus de plus de{" "}
          <Code className="text-primary">{STATS.revenueIncrease}%</Code> grâce à
          une interface utilisateur optimisée.
        </p>

        <button
          onClick={handleOpenModal}
          className="bg-background shadow-2xl p-2 rounded-md hover:bg-primary/45 transition-colors duration-200"
          aria-label="Lire l'histoire complète d'AURRA COM"
        >
          Lire l'histoire complète ...
        </button>

        <figure className="w-full flex justify-center items-center">
          <Image
            src={schowcase}
            alt="Projet de refonte pour AURRA COM - Avant/Après"
            width={1000}
            height={1000}
            className="rounded-md shadow-lg"
            priority
          />
        </figure>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <article className="space-y-4">
          <h2 className="text-xl font-bold">L'histoire d'AURRA COM</h2>
          <blockquote className="text-md md:text-lg text-muted-foreground">
            "Avant de me rencontrer, cette entreprise peinait à convertir les
            visiteurs de son site en clients. Leurs utilisateurs se perdaient
            dans une navigation peu intuitive, et les demandes de devis
            stagnaient. En repensant entièrement l'interface et en simplifiant
            l'expérience utilisateur, nous avons triplé les demandes de devis en
            seulement trois mois. Ce changement a directement augmenté leur
            nombre de clients, faisant passer les conversions de{" "}
            {STATS.conversionBefore}% à {STATS.conversionAfter}% par mois
            boostant ainsi leur chiffre d'affaires de manière significative."
          </blockquote>
        </article>
      </Modal>
    </Container>
  );
};
