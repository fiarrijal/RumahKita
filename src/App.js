import image2 from "./assets/img/2.jpg";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { programList } from "./data";
import { Fragment } from "react/cjs/react.production.min";
function App() {
	return (
		<Fragment>
			<Navbar />
			<header id="header">
				<div className="container">
					<div className="header-text">
						<h1>Senyum Mereka Adalah Kebahagiaan Kita</h1>
						<p>Mari kita sama-sama wujudkan cita - cita mereka demi masa depan yang lebih baik</p>
						<button type="button" className="btn-cat">
							donasi disini
						</button>
					</div>
				</div>
			</header>

			<div className="container flex">
				<main>
					<div id="content">
						<article id="profil" className="article">
							<h1 className="article-header">Profil RumahKita</h1>
							<div className="card">
								<img src={image2} alt="article" className="card-image" />
								<p className="card-text">
									RumahKita merupakan lembaga non profit yang fokus terhadap bidang pendidikan, terutama kepada anak yatim dan dhuafa. Hal ini didasari bahwa tiap -tiap orang memiliki hak untuk mendapat
									pendidikan, terutama anak - anak. RumahKita ini hadir untuk menfasilitasi anak - anak yatim dan dhuafa untuk mendapatkan pendidikan yang sama dengan anak - anak yang lain.
								</p>
							</div>
						</article>
						<article id="program" className="article">
							<h1 className="article-header">Program & Kegiatan RumahKita</h1>

							<div className="flex-col">
								<div className="flex-row">
									{programList.map((item) => {
										return <Card key={item.id} icon={item.icon} name={item.name} description={item.description} />;
									})}
								</div>
							</div>
						</article>
					</div>

					<aside>
						<div id="volunteer" className="card">
							<h1 className="card-title">open volunteer</h1>
							<p className="card-text">Kami membuka lowongan untuk teman - teman yang mau berpartisipasi dengan kegiatan RumahKita dengan mengisi form di bawah ini :</p>
							<form action="#">
								<input type="text" placeholder="Nama Lengkap" required="" />
								<input type="email" placeholder="Email" required="" />
								<input type="text" placeholder="No. Telepon / HP" required />
								<button type="submit">gabung sekarang</button>
							</form>
						</div>

						<div id="identitas" className="card">
							<div className="card-title">
								<h2>Identitas Diri</h2>
								<img src="" alt="" />
								<table>
									<thead></thead>
									<tbody>
										<tr>
											<th>Nama</th>
											<td>:</td>
											<td>Fauzan Imam Arrijal</td>
										</tr>
										<tr>
											<th>TTL</th>
											<td>:</td>
											<td>Bogor, 07 Juli 1995</td>
										</tr>
										<tr>
											<th>Pekerjaan</th>
											<td>:</td>
											<td>Admin</td>
										</tr>
										<tr>
											<th>Alamat Tinggal</th>
											<td>:</td>
											<td>Bumi Dirgantara Permai blok AZ 8 Jatisari, Jatiasih, Bekasi</td>
										</tr>
										<tr>
											<th>No. HP</th>
											<td>:</td>
											<td>+62 81317487066</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</aside>
				</main>
			</div>
			<footer>
				<span>copyright &#9400; 2020 - Fauzan I A. All rights reserved.</span>
			</footer>
		</Fragment>
	);
}

export default App;
