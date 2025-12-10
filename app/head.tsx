// app/head.tsx
export const metadata = {
  title: 'Portafolio · Daniela Aguilar',
  description: 'Ingeniera civil especializada en diseño de redes MEP con metodología BIM',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
