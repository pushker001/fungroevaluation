import React from 'react'

const Member = () => {


    const members = [
        {
          pic: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02f978d27935c1ae29633_Darsh%20Golecha.png',
          name: 'Build your brand',
          occupation: '₹2000',
          description: "Happy customer as Teens work is excellent. It's cost effective with great quality. Have used their graphic designing, Social media and Research Talent."
        },
        {
          pic: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a03d8184d8d4fd87a16e61_Ravishankar%20Gopalan.png",
          name: 'Customize your website',
          occupation: '₹5000–₹15000',
          description: 'Impressed by the article written by a Grade IX School student on how he has seen life transform around him with digital payments over the last ten years.'
          
        },
        {
          pic: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638f71acb547eb813076a20b_testimonial-image.png",
          name: 'Reach more customers',
          occupation: '₹5000',
          description: 'Funngro services are excellent. They have provided blogs for our website and super impressed by the quality of work done by Teens and amazed to see their financial knowledge too',
          
        },
      ];




  return (
    <div className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Project ideas</h2>
            <p className="text-lg mb-8">
            Cost-effective, innovative and timely delivery of projects by smartest talent on planet (Teenlancers)
            </p>
            <div className="grid md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <img src={member.pic} className='w-[10vh] h-[10vh] rounded-full object-cover' />  
              <h3 className="text-xl font-semibold text-green-500 mb-2">{member.title}</h3>
              <p className="text-green-400 mb-2">{member.occupation}</p>
              <p className="mb-4">{member.description}</p>
              
            </div>
          ))}
        </div>
        </div>
      
    </div>
  )
}

export default Member
