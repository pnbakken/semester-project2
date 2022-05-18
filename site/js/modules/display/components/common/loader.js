export default function addLoader(target) {
    target.innerHTML = `<div class="page-loader">
                            <div class="spinning-loader"></div>
                            Please wait
                        </div>`;
}