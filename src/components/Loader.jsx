export default function Loader({ label = 'Loading fresh listings...' }) {
  return (
    <div className="loader-wrap">
      <span className="loader" />
      <p>{label}</p>
    </div>
  );
}
