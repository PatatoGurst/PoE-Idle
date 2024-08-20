import './CurrencyItem.css';

interface ICurrencyItem {
  image: string;
  name: string;
  amount: number;
}
export default function CurrencyItem({ image, name, amount }: Readonly<ICurrencyItem>) {
  return (
    <div className='currency-item-container'>
      <img className='currency-item-image' src={image} alt={name} />
      <div className='currency-item-amount'>{amount}</div>
    </div>
  );
}
