export default function ProductDetailsLayout({
  childern,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {childern}
      <h2>FeaturedProduct</h2>
    </>
  );
}
