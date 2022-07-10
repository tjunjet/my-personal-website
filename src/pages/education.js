import '../css/education.css';
import '../css/root.css'

export default function Education() {
    return (
        <body >
            <div className="Education-header">
                <h1>EDUCATION</h1>
                <table class="school" width="100%">
                    {/* Carnegie Mellon University */}
                    <tr className = "School-name">
                        <td width="80%">Carnegie Mellon University</td>
                        <td width="20%">2021 - 2025</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope">Bachelor's of Science - Electrical and Computer Engineering</td>
                    </tr>
                    <br></br>
                    {/* Raffles Institution */}
                    <tr className = "School-name">
                        <td width="80%">Raffles Institution</td>
                        <td width="20%">2017 - 2018</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope">Singapore-Cambridge GCE 'A' Levels</td>
                    </tr>
                    <br></br>
                    {/* Maris Stella */}
                    <tr className = "School-name">
                        <td width="80%">Maris Stella High School</td>
                        <td width="20%">2013 - 2016</td>
                    </tr>
                    <tr>
                        <td className = "Job-scope">Singapore-Cambridge GCE 'O' Levels</td>
                    </tr>
                </table>
            </div>
        </body>
    )
}