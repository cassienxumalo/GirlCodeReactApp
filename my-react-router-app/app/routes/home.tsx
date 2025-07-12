import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MyButton from "~/components/MyButton";
import Profile from "~/components/Person";
import type Person from "~/types/Person";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const person: Person = {
    name: 'Kamo',
    imageUrl: "https://www.gardenandhome.co.za/wp-content/uploads/2024/08/SPRINHG-F.jpeg",
    imageSize: 90,
  }
  return (
     <div>
      <h1>Welcome to Entelect</h1>
      <MyButton/>
      <Profile person={person} />
    </div>
  );

}
