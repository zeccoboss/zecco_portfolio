import React from 'react'

const Profile = () => {
    return (
        <section className='profile'> 
            <figure className='img_wrapper img'>
                <img src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/468655044_122099009768650913_5489756931476984833_n.jpg?stp=c0.139.540.540a_dst-jpg_s540x540_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFzhyNHq_4f6rx0XZMD2lzgH7rXEk0lQPYfutcSTSVA9rV0CBZ8WpVI5W30wOnLAZtLEz7bkPB4pycBdVLQ3l6t&_nc_ohc=aBovp1gsk44Q7kNvwEEMDGx&_nc_oc=AdntVJy1upf6WSffd48oTxK3lZrL03Amr_91O31_XbEShDgVJUL3KQzIMcjZSYfpjsE&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=BRJOx5sYyFo_CpXq2_jyow&oh=00_AfHWmY9pmWAzBrbjYBVrdSCcinPGjkq0fpNxvMDH2HpXgA&oe=6801CC1C" alt="Hero profile" className='profile_img img' width={300} height={300} loading='lazy' />
                <figcaption className='img_caption'>Profile picture</figcaption>
            </figure>

            <section className='profile_details'>
                <p>Hello I am</p>
                <h1 className='name'>Obang Ezekiel</h1>
                <h4 className='prof'>Frontend Developer</h4>
                <div className='profile_btn_container'>
                    <a href="#" className='profile_link donload_cv'>Download CV</a>
                    <button className='profile_btn contact' onClick={() => location.href="#contact"}>Contact Info</button>
                </div>
                <div className="profile_social_links">
                    <a href="#" target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" target='_blank'>
                        <i className="fa-brands     fa-linkedin"></i>
                    </a>
                    <a href="#" target='_blank'>
                        <i className="fa-brands fa-discord"></i>
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Profile
