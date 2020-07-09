import React from 'react'

const servicesList = [{ 
    'title': 'Outdoor Portrait Package',
    'sampleImage' : 'Sample Image Goes Here',
    'summary': 'Outdoor sessions can be done throughout the valley. I am based in Queen Creek and can travel within 30 miles at the included price. Farther shoots will incurr an additional travel fee.',
    'imageQuantity': '20 edited digital images',
    'priceRange': '$195/hr + tax'
  },
  { 
    'title': 'Studio Portrait Package',
    'sampleImage' : 'Sample Image Goes Here',
    'summary': 'Studio sessions are done at Space One2One in Mesa. Multiple rooms/settings available.',
    'imageQuantity': '25 edited digital images',
    'priceRange': '$225/hr + tax'
  },
  { 
    'title': 'Cake Smash Package',
    'sampleImage' : 'Sample Image Goes Here',
    'summary': 'Cake smashes are shot in studio. My price includes a custom cake of your choice and available studio props.',
    'imageQuantity': '15 edited digital images',
    'priceRange': '$275 + tax'
  },]

export default function Services(){
    return <div>
        <h1>Session Types and Packages</h1>

     *   All packages come with a gallery for you to select your favorite images to be edited.
	 *	You are welcome to purchase additional images in your gallery for an additional fee.

     <ul>
                {servicesList.map(( title, sampleImage, summary, imageQuantity, priceRange) => (
                <li key={title}></li>
                ))}
    </ul>
    </div>
}