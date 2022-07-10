import '../css/root.css'
import '../css/about.css'

export default function About() {
    return (
        <body>
            <div className = "About-header">
                <h1>ABOUT ME</h1>
                <br></br>
                <table>
                    <tr className = "Description">
                        <td>Insert Description here</td>
                        <td width="30%">Insert Photo Here</td>
                    </tr>
                </table>
            </div>
        </body>
    )
}