import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "../sections";

const sections = [
  { id: "home", Component: Hero },
  { id: "about", Component: About },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "experience", Component: Experience },
  { id: "contact", Component: Contact },
];

export const Home = () => {
  return (
    <div className="space-y-10">
      {sections.map(({ id, Component }) => (
        <section key={id} id={id} className="scroll-mt-24">
          <Component />
        </section>
      ))}
    </div>
  );
};
