export default function AnalyticsComponent({
  numberOfCharachters,
  numberOfWords,
}) {
  return (
    <section className="analytics">
      <Stat name="Words" limit={numberOfWords} />
      <Stat name="Charachters" limit={numberOfCharachters} />
      <Stat name="Instagram" limit={280} />
      <Stat name="X" limit={200} />
    </section>
  );
}

function Stat({ name, limit }) {
  return (
    <section className="stat">
      <span className="stat-number">{limit}</span>
      <h2 className="second-heading">{name}</h2>
    </section>
  );
}
