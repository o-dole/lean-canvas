import { FaSpinner } from 'react-icons/fa';

export default function Button({
  children,
  onClick,
  className,
  loading = false,
}) {
  const clazz = [
    'flex bg-blue-600 hover:bg-blue-500 text-white font-bold py-1.5 px-4 rounded',
    className,
  ].join('');

  const handleClick = () => {
    if (loading) {
      return;
    }
    onClick();
  };

  return (
    <button onClick={handleClick} className={clazz} disabled={loading}>
      <span className="flex justify-center items-center mr-2">
        {loading && <FaSpinner className="animate-spin" />}
      </span>
      {children}
    </button>
  );
}
