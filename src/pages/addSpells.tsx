import axios from "axios";
import { type NextPage } from "next";
import { useState } from "react";

const addSpells: NextPage = () => {
  const [spell, setSpell] = useState({
    concentration: false,
    ritual: false,
    school: "Abjuration",
    castingTime: "1 Action",
  });
  const checkboxes = ["S", "M", "V", "concentration", "ritual"];
  function updateSpell(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    let value;
    if (checkboxes.includes(name)) {
      value = e.currentTarget.checked;
    } else if (e.currentTarget.type === "number") {
      value = e.currentTarget.valueAsNumber;
    } else {
      value = e.currentTarget.value;
    }
    setSpell({ ...spell, [name]: value });
    console.log(spell);
  }

  async function postNewSpell(e: React.MouseEvent<HTMLElement>) {
    const response = await axios
      .post(`/api/create/spell`, {
        spell,
      })
      .catch(() => {
        alert("Malformed Data");
      });
    console.log(response);
  }

  return (
    <>
      <form className="m-auto grid w-[50%] grid-cols-2 gap-2 p-8" action="">
        <label htmlFor="name">Name*</label>
        <input
          className="border-2 border-solid border-black"
          type="text"
          name="name"
          id="name"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="level">Level*</label>
        <input
          className="border-2 border-solid border-black"
          type="number"
          name="level"
          id="level"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="school">School*</label>
        <select
          className="border-2 border-solid border-black px-2"
          name="school"
          id="school"
          onChange={(e) => updateSpell(e)}
        >
          <option value="Abjuration">Abjuration</option>
          <option value="Alteration">Alteration</option>
          <option value="Conjuration">Conjuration</option>
          <option value="Divination">Divination</option>
          <option value="Enchantment">Enchantment</option>
          <option value="Illusion">Illusion</option>
          <option value="Invocation">Invocation</option>
          <option value="Necromancy">Necromancy</option>
        </select>
        <label htmlFor="castingTime">Casting Time*</label>
        <select
          className="border-2 border-solid border-black px-2"
          name="castingTime"
          id="castingTime"
          onChange={(e) => updateSpell(e)}
        >
          <option className="px-8" value="1 action">
            1 action
          </option>
          <option value="1 bonus action">1 bonus action</option>
          <option value="1 reaction">1 reaction</option>
        </select>
        <label htmlFor="castingTime">Casting Time Details</label>
        <input
          className="border-2 border-solid border-black"
          type="textarea"
          name="castingTimeDetails"
          id="castingTimeDetails"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="range">Range</label>
        <input
          className="border-2 border-solid border-black"
          type="number"
          name="range"
          id="range"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="cone">Cone</label>
        <input
          className="border-2 border-solid border-black"
          type="number"
          name="cone"
          id="cone"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="radius">Radius</label>
        <input
          className="border-2 border-solid border-black"
          type="number"
          name="radius"
          id="radius"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="V">V</label>
        <input
          className="border-2 border-solid border-black"
          type="checkbox"
          name="V"
          id="V"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="S">S</label>
        <input
          className="border-2 border-solid border-black"
          type="checkbox"
          name="S"
          id="S"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="M">M</label>
        <input
          className="border-2 border-solid border-black"
          type="checkbox"
          name="M"
          id="M"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="material">Material</label>
        <input
          className="border-2 border-solid border-black"
          type="textarea"
          name="material"
          id="material"
          onChange={(e) => updateSpell(e)}
        />

        <label htmlFor="duration">Duration*</label>
        <input
          className="border-2 border-solid border-black"
          type="number"
          name="duration"
          id="duration"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="concentration">Concentration</label>
        <input
          className="border-2 border-solid border-black"
          type="checkbox"
          name="concentration"
          id="concentration"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="ritual">Ritual</label>
        <input
          className="border-2 border-solid border-black"
          type="checkbox"
          name="ritual"
          id="ritual"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="description">Description*</label>
        <input
          className="border-2 border-solid border-black"
          type="textarea"
          name="description"
          id="description"
          onChange={(e) => updateSpell(e)}
        />
        <label htmlFor="higherCastDescription">Higher Cast Description</label>
        <input
          className="border-2 border-solid border-black"
          type="textarea"
          name="higherCastDescription"
          id="higherCastDescription"
          onChange={(e) => updateSpell(e)}
        />
        <input
          type="button"
          value="Submit Spell"
          onClick={(e) => postNewSpell(e)}
        />
      </form>
    </>
  );
};

export default addSpells;
