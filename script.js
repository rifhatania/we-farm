// Handle Landing Page
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login").addEventListener("click", function () {
        window.location.href = "login.html";
    });

    document.querySelector(".register").addEventListener("click", function () {
        window.location.href = "signup.html";
    });
});


// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const phone = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (phone && password) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "home.html";
    } else {
        alert("Masukkan username dan password!");
    }
});

function togglePassword() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Handle Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && phone && email && password) {
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "login.html";
    } else {
        alert("Harap isi semua field!");
    }

    function validateSignUp() {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
    
        if (password !== confirmPassword) {
            alert("Password tidak cocok! Coba lagi.");
        } else {
            alert("Registrasi berhasil!");
        }
    }
});


// Handle Home
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const plantCards = document.querySelectorAll(".plant-card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        plantCards.forEach(card => {
            const plantName = card.querySelector("p").textContent.toLowerCase();
            card.style.display = plantName.includes(query) ? "block" : "none";
        });
    });
});


// Handle Guide dan Track
document.addEventListener("DOMContentLoaded", function () {
    const plantCards = document.querySelectorAll(".plant-card");
    const guideModal = document.createElement("div");
    guideModal.classList.add("guide-modal");
    document.body.appendChild(guideModal);

    const plantGuides = {
        "Cabai Rawit": {
            steps: [
                "Siapkan pot yang memiliki lubang drainase. Isi pot dengan media tanam sampai menyisakan 5-10 cm dari bibir pot.",
                "Sebarkan biji cabai rawit dengan jarak 5-10 cm diatas media tanam.",
                "Siram bibit cabai dengan semprotan tanaman 2 kali sehari (pagi dan sore).",
                "Bibit cabai bisa dipindahkan ke lahan ketika sudah tumbuh 5-6 helai daun (30-35 hari)."
            ],
            products: ["Pot Tanaman", "Kompos Organik", "Bibit Cabai Rawit"]
        },
        "Cabai Merah": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Cabai Merah"]
        },
        "Cabai Hijau": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Cabai Keriting"]
        },
        "Cabai Keriting": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Cabai Gendot": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Tomat Sayur": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Tomat Ceri": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Tomat Hijau": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Terong Putih": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Terong Putih"]
        },
        "Terong Ungu": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Terong Ungu"]
        }
    };

    plantCards.forEach(card => {
        card.addEventListener("click", function () {
            const plantName = card.querySelector("p").textContent;
            const guide = plantGuides[plantName];

            if (guide) {
                let stepsHTML = guide.steps.map((step, index) =>
                    `<div class="step"><b>${index + 1}.</b> ${step}</div>`
                ).join("");

                let productsHTML = guide.products.map(product =>
                    `<li>${product}</li>`
                ).join("");

                guideModal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <i id="bookmarkBtn" data-feather="bookmark"></i>
                        </div>
                        <div class="modal-body">
                            <div class="guide-steps">
                                <h2>${plantName}</h2>
                                <div class="steps">${stepsHTML}</div>
                            </div>
                            <div class="guide-products">
                                <h3>Product Recommendation:</h3>
                                <ul>${productsHTML}</ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button id="closeModal">Close</button>
                            <button id="startPlant">Start Plant</button>
                        </div>
                    </div>
                `;

                guideModal.classList.add("show");
                guideModal.style.display = "flex";
                feather.replace();

                // Handle bookmark click
                const bookmarkBtn = document.getElementById("bookmarkBtn");
                bookmarkBtn.addEventListener("click", function () {
                    bookmarkBtn.classList.toggle("bookmarked");
                    bookmarkBtn.style.color = bookmarkBtn.classList.contains("bookmarked") ? "#f0ad4e" : "#000";
                });

                // Handle close modal
                document.getElementById("closeModal").addEventListener("click", () => {
                    guideModal.style.display = "none";
                    guideModal.classList.remove("show");
                });

                // Handle "Start Plant" button
                document.getElementById("startPlant").addEventListener("click", function () {
                    window.location.href = `track.html?plant=${encodeURIComponent(plantName)}`;
                });
            }
        });
    });
    
    // Track
    const params = new URLSearchParams(window.location.search);
    const plantName = params.get("plant");

    function getFormattedDate(date) {
        return date.toLocaleDateString("id-ID");
    }
    
    function addMonths(date, months) {
        let newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + months);
        return newDate;
    }
    
    const today = new Date();

    if (plantName) {
        document.querySelector(".plant-details h3").textContent = plantName;

        // data tanaman
        const plantData = {
            "Cabai Rawit": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Rawit.jpeg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Tomat Sayur": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Sayur.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            }
        };

        if (plantData[plantName]) {
            const plantInfo = plantData[plantName];
            document.querySelector(".plant-info img").src = plantInfo.image;
            document.querySelector(".plant-info img").alt = plantName;
            document.querySelector(".plant-details p:nth-of-type(1)").innerHTML = `<b>Start:</b> ${plantInfo.start}`;
            document.querySelector(".plant-details p:nth-of-type(2)").innerHTML = `<b>Estimated:</b> ${plantInfo.estimated}`;

            // Update target list
            const targetList = document.querySelector(".target ul");
            targetList.innerHTML = "";
            plantInfo.targets.forEach(target => {
                targetList.innerHTML += `<li><input type="checkbox"> ${target}</li>`;
            });
        }
    }

    // Handle back button
    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }

    // Handle problem button
    const problemBtn = document.querySelector(".problem-btn");
    if (problemBtn) {
        problemBtn.addEventListener("click", function () {
            alert("Cek kelembapan tanah dan perhatikan hama pada tanaman!");
        });
    }
});
