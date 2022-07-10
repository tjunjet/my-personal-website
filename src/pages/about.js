import AboutMePhoto from "../assets/images/about-me-photo.png"
import '../css/root.css'
import '../css/about.css'

export default function About() {
    return (
        <body>
            <div className = "About-header">
                <br></br>
                <table>
                    <h1>ABOUT ME</h1>
                    <tr className = "Description">
                        <td>I am a sophomore studying Electrical and Computer Engineering at 
                            Carnegie Mellon University. My dream is to innovate a better world 
                            through smart and sustainable engineering.
                            <br></br>
                            <br></br>
                            My academic interests are in mathematics, physics, engineering, and 
                            computer science. Robotics.
                            <br></br>
                            <br></br>
                            I also love music. I love musical instruments, and learning them.
                            I also have perfect pitch.
                            <br></br>
                            <br></br>
                            I am also in love with exercising. Gymming, Swimming, and Soccer are my favorite
                            sports.
                            <br></br>
                            <br></br>
                            I find joy in many things for fun. Playing pool, foosball, mahjong, 
                            KDramas, Anime, Bridge etc. I also love just lying down and taking a nap 
                            whenever I have free time.
                        </td>
                        <td width="40%">
                            <img src={AboutMePhoto} className="My-Photo" alt="logo" />
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    )
}