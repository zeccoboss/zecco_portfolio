import React from 'react'

const About = () => {
    
    return (
        <article id='about' className='about'>
            <p>Get To Know More About Me</p>
            <h2 className='about_head'>About Me</h2>

            <div className="about_inner_container" id=''>
                <figure className='about_img_container'>
                    <img src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/468655044_122099009768650913_5489756931476984833_n.jpg?stp=c0.139.540.540a_dst-jpg_s540x540_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFzhyNHq_4f6rx0XZMD2lzgH7rXEk0lQPYfutcSTSVA9rV0CBZ8WpVI5W30wOnLAZtLEz7bkPB4pycBdVLQ3l6t&_nc_ohc=aBovp1gsk44Q7kNvwEEMDGx&_nc_oc=AdntVJy1upf6WSffd48oTxK3lZrL03Amr_91O31_XbEShDgVJUL3KQzIMcjZSYfpjsE&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=BRJOx5sYyFo_CpXq2_jyow&oh=00_AfHWmY9pmWAzBrbjYBVrdSCcinPGjkq0fpNxvMDH2HpXgA&oe=6801CC1C" alt="About profile" loading='lazy' className='about_img img' />
                    <figcaption>About image</figcaption>
                </figure>

                <section className='about_details'>
                    <div className="details" id='details'>
                        <div className='experience_details' id='experience_details'>
                            <i className="fa-solid fa-award"></i>
                            <h2>Experience</h2>
                            <p>1+ years</p>
                            <p>Frontend Development</p>
                        </div>

                        <div className='education_details' id='education_details'>
                            <i className="fa-solid fa-user-group"></i>                     <h2>Education</h2>
                            <p>High schooler</p>
                                <p>...</p>
                        </div>  
                    </div>
                    <section className='about_description'>
                        <p>I'm <strong>Obang Ezekiel</strong> fron Nigeria. I'm a passionate frontend developer who loves buildind functional and responsive web applcations</p>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, natus. Explicabo deleniti est eligendi, ullam architecto voluptatum tenetur reiciendis numquam?</p> */}
                    </section>    
                
                </section>
            </div>
        </article>
    )
}

export default About
