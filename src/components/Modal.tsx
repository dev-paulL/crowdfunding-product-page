import validatedIcon from '../assets/icon-check.svg'
export default function Modal() {
  return (
    <div className='fixed w-full h-screen bg-darkGray bg-opacity-10'>
        <div>
            <img src={validatedIcon} alt="" />

            <h2>Thanks for your support</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button className='rewardBtn'>Got it!</button>
        </div>
    </div>
  )
}
