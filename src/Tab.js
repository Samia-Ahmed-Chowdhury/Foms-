import React from 'react'
import "../src/components/style.css"

function Tab() {
    return (
        <section className=' mt-5 pt-4'>
            <div className='container'>
                <div className='row'>
                <img src="../images/logo.png" className='logo img-fluid' alt="svf" />
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='theader'>Attendance information</div>
                </div>
                <div className='row my-5 py-2'>
                <table border="1px">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Employee Name</th>
                            <th>Status</th>
                        </tr>
                    <tr>
                        <td>01/02/22</td>
                        <td>sami</td>
                        <td>Present</td>
                    </tr>
                    <tr>
                        <td>01/02/22</td>
                        <td>sam</td>
                        <td>Present</td>
                    </tr>
                    <tr>
                        <td>01/02/22</td>
                        <td>sai</td>
                        <td>Absent</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}

export default Tab