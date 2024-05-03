// Error page
function ErrorPage(): JSX.Element {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "95vh"
        }}>
            <h1 style={{
                fontSize: 72
            }}>404</h1>
            <h3>Данной страницы не существует</h3>
        </div>
    )
}

export default ErrorPage