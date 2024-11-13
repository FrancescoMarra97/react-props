import Button from "./Button/Button";

export default function AppMain() {

    return (
        <main>
            <div className="container">
                <div class="card">
                    <img src="https://via.placeholder.com/600x400" alt="Image" className="card-img" />
                    <div class="card-body">
                        <h5 class="card-title">TItolo del post</h5>
                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus saepe, aperiam ex asperiores dolorum ipsa accusantium, sed rem sapiente esse veniam reiciendis facilis sint nihil neque! Quas illo corrupti quia!</p>
                    </div>
                    <div class="card-footer">
                        <Button />
                    </div>
                </div>
            </div>
        </main>
    )
}