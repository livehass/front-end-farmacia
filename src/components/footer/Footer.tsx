import { Envelope, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
      <>
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 flex justify-center text-white">
            <div className="container flex flex-col items-center py-2">
              <p className='text-xl font-bold'>Farmacia do jorjão</p>
              <div className='flex gap-6 m-5'>
                <a href='#'>
                  <LinkedinLogo size={48} weight='bold' color='lightblue'/>
                </a>
                <a href='#'>
                  <InstagramLogo size={48} weight='bold' color='lightblue'/>
                </a>
                <a href='#'>
                  <Envelope size={48} weight='bold' color='lightblue'/>
                </a>
              </div>
            </div>
          </div>
        </>
    )
}
  
  export default Footer