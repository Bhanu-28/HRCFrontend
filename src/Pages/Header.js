

export default function Header() {
    return (
        <div className='w-full flex justify-between  ' style={{ backgroundColor: '#2C4250', color: 'white' }}>
            <div className='p-3'>
                <img src={require('../Images/Logo/abc_product.svg').default} ></img>
            </div>
            <div className='flex justify-center'>
                <img className='' src={require('../Images/Logo/hrclogo.svg').default} ></img>
            </div>
            <div className='mr-80'>

            </div>
        </div>
    )
}
