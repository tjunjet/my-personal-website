import '../css/root.css'
import '../css/projects.css'

export default function Projects() {
    return (
        <body >
            <div className="Projects-header">
                <h1>PROJECTS</h1>
                <table width="100%">
                    <hr></hr>
                    {/* Robotics Intern at DSTA */}
                    <tr className = "Project-name">
                        <td width="80%">Computer Vision Aided</td>
                        <td className = "Date" width="20%">May 2022 - Aug 2022</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope">Defence Science and Technology Agency</td>
                    </tr>
                    <tr>
                        <td className = "Description">
                            <br></br>
                            <b>Awards and Recognitions:</b>
                            <ul>
                                <li>Spring 2022 Dean's List</li>
                                <li>Fall 2021 Dean's List</li>
                                <li>Electrical Lead of Blitz Booth - Champion, CMU Spring Carnival</li>
                                <li>Vocal International Championship of Collegiate A Cappella (ICCA) Regional Runners-up</li>
                                <li>Tartanhacks 2022 - Figma Award for Best Design</li>
                                <li>Hack112 - Top 5 Teams (Honorable Mention)</li>
                            </ul>
                        </td>
                    </tr>
                    <hr></hr>
                </table>
            </div>
        </body>
    )
}