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
                        <td>Hello! I'm Tjun Jet, a sophomore who is currently studying 
                            Electrical and Computer Engineering at Carnegie Mellon University. 
                            My dream is to innovate a better world through smart and sustainable engineering.
                            <br></br>
                            <br></br>
                            Since young, I was captivated by physics. 
                            It started from the day I was introduced to “The Mandela Effect” 
                            - an unusual occurrence where large groups remember something differently from how
                            it happened. This inspired some to wonder about the possibility of parallel universes, 
                            and hence, I began exposing myself to fascinating physics phenomena like the formation of
                            quasars and supermassive black holes. I also began delving into the mathematics behind
                            modern physics concepts such as special relativity and quantum mechanics.
                            <br></br>
                            <br></br>
                            I have recently also become really involved in computer science, particularly in the fields 
                            of Computer Vision, Deep Learning, Robotics, Web & App Development, and Cybersecurity. 
                            Feel free to look through some of my personal projects and github page!
                            <br></br>
                            <br></br>
                            Music fascinated me from young. Professionally, I play the piano, violin, and various 
                            percussion instruments. I have recently also begun learning the guitar and electric bass. 
                            Other than instruments, I am also a tenor in my college's A Cappella Group.
                            I was blessed with perfect pitch - an ability to identify musical notes without any aids. 
                            Thus, I would usually find myself spending hours glued to my piano probably arranging a medley 
                            by ear.
                            <br></br>
                            <br></br>
                            In my free time, I do many things for fun. Firstly, I love exercising, especially with friends. 
                            I would usually spend two hours a day either going to the gym, having a swim, or
                            having a game of soccer with my friends. I also find joy in playing pool, foosball, mahjong, watching
                            Korean Dramas, Anime, card games, any many more!
                        </td>
                        <td width="40%">
                            <img src={AboutMePhoto} className="My-Photo" alt="logo" />
                        </td>
                    </tr>
                </table>
                <br></br>
                <br></br>
            </div>
        </body>
    )
}