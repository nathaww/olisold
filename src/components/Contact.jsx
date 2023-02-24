import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='px-4 lg:px-20 py-10'>
      <h1 className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold ">Get in contact with us</h1>
      <p className='mb-8 text-center'>Call or contact us to order</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto place-items-stretch bg-darkSecondary h-56">
        <div className='bg-primary rounded flex items-center justify-center'>
          <a className='text-secondary' href="tel:+251911391392" aria-label="call">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto w-6"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              ></path>
            </svg>
          </a>
        </div>
        <div className='bg-secondary rounded'>02</div>
        <div className='bg-secondary rounded'>03</div>
        <div className='bg-secondary rounded'>04</div>
        <div className='bg-secondary rounded'>05</div>
        <div className='bg-secondary rounded'>06</div>
      </div>


    </section>
  )
}

export default Contact