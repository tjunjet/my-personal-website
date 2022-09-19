import '../css/root.css'
import '../css/projects.css'

export default function Projects() {
    return (
        <body >
            <div className="Projects-header">
                <h1>PROJECTS</h1>
                <table width="100%">
                    <hr></hr>
                    {/* Soldier Strong */}
                    <tr className = "Project-name">
                        <td width="80%">Take TO Wake</td>
                        <td className = "Date" width="20%">Sep 2022</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope">1st Runners-Up, HackCMU 2022</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            <b><u>Description</u></b>
                            <br></br>
                            <br></br>
                            An alarm application where you can only turn off the alarm
                            upon completing the task. The task involves taking a photo with an item 
                            in your house, which will be verified using a computer vision algorithm.
                            The stack involves using React-Native as the front-end application builder,
                            Flask for backend server, and Firebase for data storage.
                            <br></br>
                            <br></br>
                            <b><u>App Features</u></b>
                            <ul>
                                <li>Alarm</li>
                                <li>Computer Vision</li>
                                <li>Interactive Dashboard</li>
                                <li>Gamification</li>
                            </ul>
                            <b><u>Tech Stack</u></b>
                            <ul>
                                <li>React Native Expo</li>
                                <li>Firebase Cloud Firestore</li>
                                <li>Flask</li>
                                <li>YoloV5</li>
                            </ul>
                        </td>
                    </tr>
                    <hr></hr>
                    {/* Soldier Strong */}
                    <tr className = "Project-name">
                        <td width="80%">Fitness Tracker App "Soldier Strong" </td>
                        <td className = "Date" width="20%">Jun 2022</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope">Champion (Best MVP), Brainhack CODE_EXP 2022</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            <b><u>Description</u></b>
                            <br></br>
                            <br></br>
                            An IPPT Tracker app that uses Cloud Firestore, 
                            TensorflowJS, and Google/Apple Maps API to conduct
                            live tracking of an NSMan's training routine including pushups, 
                            situps, and runs.
                            <br></br>
                            <br></br>
                            <b><u>App Features</u></b>
                            <ul>
                                <li>Profile Page Editing</li>
                                <li>User Dashboard with statistics updated live from cloud firestore</li>
                                <li>Running Distance and Location tracker using Google/Apple Maps</li>
                                <li>Pushup Counter (Computer Vision)</li>
                                <li>Situps Counter (Computer Vision)</li>
                                <li>IPPT Score Calculator</li>
                            </ul>
                            <b><u>Tech Stack</u></b>
                            <ul>
                                <li>React Native Expo</li>
                                <li>Firebase Cloud Firestore</li>
                                <li>TensorflowJS</li>
                                <li>Mediapipe</li>
                            </ul>
                            <p><a href = "https://www.youtube.com/watch?v=ySV1-EBOtcU" className = "Youtube-Link">Youtube Video</a></p>
                        </td>
                    </tr>
                    <hr></hr>
                    {/* The Winter Soldier */}
                    <tr className = "Project-name">
                        <td width="80%"> Automated Snow-Shovelling Robot "The Winter Soldier"</td>
                        <td className = "Date" width="20%"> Apr 2022 </td>
                    </tr>
                    <tr>
                        <td className = "Job-scope"> Awarded Small Helpful Research Grant (SHRG), CMU Robotics Club</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                        <b><u>Description</u></b>
                            <br></br>
                            <br></br>
                            Utilizing Computer Vision and ROS to detect regions of high snow 
                            concentration for autonomous snow-clearing of robots during winter.
                            <br></br>
                        </td>
                    </tr>
                    <hr></hr>
                    {/* Sleep Buddy */}
                    <tr className = "Project-name">
                        <td width="80%"> Sleep cycle recommender app "Sleep Buddy"</td>
                        <td className = "Date" width="20%"> Jan 2022</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope"> Figma Award for Best Design, Tartanhacks 2022</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            <b>Description: </b>
                            <br></br>
                            <br></br>
                            Our mobile app uses gamification to incentivize users to maintain a healthy 
                            sleep schedule. Based on your current sleep schedule determined by a quick 15 
                            minute questionnaire, the app's in-built artificial neural network recommends 
                            the best sleep timings that you should adopt. As you continue to use the app, 
                            "Sleep Buddy" uses deep reinforcement learning eventually improves it recommender 
                            system to provide the best strategies to improve sleep cycle that cater to the specific user.
                            <br></br>
                            <br></br>
                            Increase your damage to defeat the monster by sticking to the recommended sleep 
                            schedule and earn gold for every monster defeated! Share your progress with your 
                            friends on social media.
                            <br></br>
                            <br></br>
                            Using deep reinforcement learning, Sleep Buddy monitors your sleeping patterns and tracks the 
                            amount of sleep debt you have. Based on your motion after the alarm sounds, the app will track 
                            whether you are awake and remind you to wake up!
                            <br></br>
                            <br></br>
                            Finally, Sleep Buddy provides you with graphs to track your sleep progress as well as reminders 
                            on your daily activities to keep you productive!
                            <p><a href = "https://www.youtube.com/watch?v=rizfjVbPnFM" className = "Youtube-Link">Youtube Video</a></p>
                            <p><a href = "https://github.com/tjunjet/Sleep-Buddy" className = "Youtube-Link">GitHub Repository</a></p>
                        </td>
                    </tr>
                    <hr></hr>
                    {/* Winter Weather Guide */}
                    <tr className = "Project-name">
                        <td width="80%"> The Winter Wear-ther Guide </td>
                        <td className = "Date" width="20%"> Dec 2021 </td>
                    </tr>
                    <tr>
                        <td className = "Job-scope"> Personal Project</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            <b>Description:</b>
                            <br></br>
                            <br></br>
                            Our app the "Winter wear-ther guide" takes in user information such as their age, 
                            gender, height, weight and combines it with current weather data to give 
                            recommendations on what the user should wear! Our algorithms are based on supervised 
                            and unsupervised machine learning techniques such as Artificial Neural Networks and AutoEncoding.
                            <br></br>
                            <br></br>
                            <b>How we built it: </b>
                            <ol>
                                <li>We obtain user information from the front end of our application and send them to the backend.
                                     The backend will process the information and apply it to our AutoEncoder. Our AutoEncoder will 
                                     give us a lower-dimensional representation of our data allowing us to obtain the most important 
                                     parts of our data.</li><br></br>
                                <li>We feed the encoded data from our AutoEncoder as well as our weather data into our Artificial 
                                    Neural Network which will output a recommendation of what to wear based on current weather conditions.</li>
                                    <br></br>
                                <li>The backend will return this recommendation to the frontend which will then be displayed to the user.</li>
                            </ol>
                            <p><a href = "https://www.youtube.com/watch?v=UeieskeAv7Q" className = "Youtube-Link">Youtube Video</a></p>
                            <p><a href = "https://github.com/tjunjet/winter_wear-ther_guide" className = "Youtube-Link">GitHub Repository</a></p>
                        </td>
                    </tr>
                    <hr></hr>
                    {/* Geometronome Dash */}
                    <tr className = "Project-name">
                        <td width="80%"> Geometronome Dash </td>
                        <td className = "Date" width="20%"> Nov 2021</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope"> </td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            <b>Description: </b>
                            <br></br>
                            <br></br>
                            Geometronome Dash is an adaptation of “Geometry Dash”, 
                            along with some additional features. Geometronome Dash 
                            works very similarly to Geometry Dash, in that you have 
                            a square that clears obstacles according to the rhythm 
                            of the music. Geometronome Dash aims to recreate that 
                            while still allowing the player to input any music file 
                            they like. After which, the game will use a beat-detection, 
                            pitch-detection, and smart map generation algorithm to 
                            generate the obstacles according to the rhythm and intensity 
                            of the music. The frequency of obstacle generation will 
                            utilize beat-detection algorithms while the complexity of 
                            the map will depend on the loudness and pitch of the music 
                            at that particular point of the music.
                            <br></br>
                            <p><a href = "https://www.youtube.com/watch?v=FRZtIjSVagY" className = "Youtube-Link">Youtube Video</a></p>
                            <p><a href = "https://github.com/tjunjet/112termproject" className = "Youtube-Link">GitHub Repository</a></p>
                        </td>
                    </tr>
                    <hr></hr>
                    {/* Hack112 */}
                    <tr className = "Project-name">
                        <td width="80%"> Motion-based Object Slicing Game</td>
                        <td className = "Date" width="20%"> Oct 2021 </td>
                    </tr>
                    <tr>
                        <td className = "Job-scope"> Top 5 Teams, Honorable Mention, CMU Hack112 Hackathon</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            Insert description here
                            <br></br>
                            <p><a href = "https://www.youtube.com/watch?v=9WPAkc6xg0I" className = "Youtube-Link">Youtube Video</a></p>
                            <p><a href = "https://github.com/tjunjet/Egg_and_Tofu" className = "Youtube-Link">GitHub Repository</a></p>

                        </td>
                    </tr>
                    <hr></hr>
                </table>
            </div>
        </body>
    )
}