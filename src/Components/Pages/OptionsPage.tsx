import useSaveState from '../../Hooks/useSaveState';

export default function OptionsPage() {
  const { save, reset, hasSaveInStorage } = useSaveState();
  return (
    <div>
      <h1>Options</h1>
      <h2>Save</h2>
      <p>{hasSaveInStorage() ? 'Il y a une sauvegarde en local' : 'Néant'}</p>
      <ul>
        <li>
          <button onClick={() => save()}>Save</button>
        </li>
        <li>
          <button onClick={() => reset()}>Reset</button>
        </li>
      </ul>
    </div>
  );
}
