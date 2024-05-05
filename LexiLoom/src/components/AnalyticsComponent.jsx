export default function AnalyticsComponent({ stats }) {
  return (
    <section className="analytics">
      <Stat name="Words" limit={stats.numberOfWords} />
      <Stat name="Charachters" limit={stats.numberOfCharachters} />
      <Stat name="Instagram" limit={stats.instagramCharacterLeft} />
      <Stat name="X" limit={stats.xCharacterLeft} />
    </section>
  );
}

function Stat({ name, limit }) {
  return (
    <section className="stat">
      <span className={`stat-number ${limit < 0 ? "stat-number--limit" : ""}`}>
        {limit}
      </span>
      <h2 className="second-heading">{name}</h2>
    </section>
  );
}
