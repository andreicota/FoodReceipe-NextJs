const MealDetailsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
};

export default MealDetailsPage;
