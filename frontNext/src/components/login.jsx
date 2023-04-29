export default function Login() {
    return (
        <div>
            <form action="http://localhost:3000/api/login" method="POST">
                <fieldset>
                    <div class="form-control">
                        <label for="username">Username</label>
                        <input type="username" id="username" placeholder="Enter your username" required />
                    </div>

                    <div class="form-control">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <input type="submit" value="Send" class="submit-btn" />
                </fieldset>
            </form>

        </div>
    )
  }