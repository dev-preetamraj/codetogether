const AboutSection = () => {
  return (
    <section className="mx-10 lg:mx-40 flex flex-col space-y-6" id="about">
      <h1 className="text-4xl text-center">What you get?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div>
					<h1>Collaborative code editor</h1>
				</div>
				<div>
					<h1>Playground</h1>
				</div>
			</div>
    </section>
  );
};

export default AboutSection;
