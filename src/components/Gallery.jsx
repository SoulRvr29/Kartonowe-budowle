import modelsData from "../data/models-data.json";

const Gallery = (id) => {
  const model = modelsData[id.id];
  const max = model.photos.quantity;
  const src = model.photos.day.thumb;
  let locations = [];

  for (let i = 1; i <= max; i++) {
    locations.push(src + i + ".jpg");
  }

  return (
    <section className="px-8 py-4">
      <b>
        <h3> Galeria</h3>
      </b>
      <hr />
      <div className="flex gap-5 p-4 flex-wrap justify-center">
        {locations.map((loc) => {
          return (
            <button>
              <img
                className="h-[10rem] border-2 border-accent rounded-xl hover:border-accent-2  hover:brightness-110"
                src={loc}
                alt={model.name + " photo"}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
