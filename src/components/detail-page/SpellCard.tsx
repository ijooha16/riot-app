import { spellImg } from "@/assets/character-image";
import { Spell } from "@/types/Champion";
import Image from "next/image";

const SpellCard = ({ spell }: { spell: Spell }) => {
  return (
    <div>
      {spell.name}
      <Image
        src={spellImg(spell.id)}
        alt={spell.name}
        width={spell.image.w}
        height={spell.image.h}
      />
      {spell.description}
    </div>
  );
};

export default SpellCard;
