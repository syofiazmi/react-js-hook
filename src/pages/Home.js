import React, { Component } from 'react'
import Hitung from '../components/Hitung'

export default class Home extends Component {
    render() {
        return (
            <div style={{margin: '50px'}}>
                <header>
                    <h2>Aplikasi Penghitung Jumlah Pengunjung Mall Matahari</h2>
                </header>

                <hr />
                <Hitung />
                <hr />

                <footer>
                    <p>Created By M. Syofi Azmi</p>
                </footer>
            </div>
        )
    }
}
