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

    const phone = document.getElementById("name").value;
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
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    if (!form) return;

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;
        submitBtn.textContent = "Loading...";

        // Get form values
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validation
        if (!validateForm(name, phone, email, password, confirmPassword)) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Sign Up";
            return;
        }

        // Simulate API call (replace with actual fetch())
        setTimeout(() => {
            alert("Sign up successful! Redirecting to login...");
            form.reset();
            window.location.href = "login.html";
        }, 1000);
    });
});

// Toggle password visibility (optimized)
function togglePassword(inputId, element) {
    const input = document.getElementById(inputId);
    const icon = element.querySelector("i");
    input.type = input.type === "password" ? "text" : "password";
    icon.setAttribute("data-feather", input.type === "password" ? "eye" : "eye-off");
    feather.replace();
}

// Validate all fields
function validateForm(name, phone, email, password, confirmPassword) {
    // Check empty fields
    if (!name || !phone || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format!");
        return false;
    }

    // Phone validation (min 10 digits)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be at least 10 digits!");
        return false;
    }

    // Password strength (min 8 chars, 1 uppercase, 1 number)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be 8+ chars with 1 uppercase letter and 1 number!");
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}


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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#profileIcon").addEventListener("click", function () {
        window.location.href = "profile.html";
    });
});


// Handle Drawer Home
document.addEventListener("DOMContentLoaded", function () {
    feather.replace();
    const menuIcon = document.getElementById("menuIcon");
    const drawer = document.getElementById("drawer");
    const closeDrawer = document.getElementById("closeDrawer");

    menuIcon.addEventListener("click", function () {
        drawer.classList.add("open");
    });

    closeDrawer.addEventListener("click", function () {
        drawer.classList.remove("open");
    });

    window.addEventListener("click", function (e) {
        if (!drawer.contains(e.target) && !menuIcon.contains(e.target)) {
            drawer.classList.remove("open");
        }
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
            products: ["Pot Tanaman", "Kompos Organik", "Bibit Cabai Rawit"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                },
                {
                    user: "Rifha",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Cabai Merah": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Cabai Merah"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Cabai Hijau": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Cabai Keriting"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Cabai Keriting": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Cabai Gendot": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Tomat Sayur": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Tomat Ceri": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Tomat Hijau": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Terong Putih": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Terong Putih"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
        },
        "Terong Ungu": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Terong Ungu"],
            experiences: [
                {
                    user: "Lena",
                    text: "Lorem Ipsum Dolor sit Amet"
                }
            ]
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
                    `<li><a href="https://shopee.co.id/search?keyword=${encodeURIComponent(product)}" target="_blank">${product}</a></li>`
                ).join("");

                guideModal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <i id="bookmarkBtn" data-feather="bookmark"></i>
                        </div>
                        <div class="modal-body">
                            <div class="guide-steps">
                                <h2>${plantName}</h2>
                                <div class="scrollable-content">
                                    <div class="steps">${stepsHTML}</div>
                                    <div class="experiences-section">
                                        <h3>Other Experience</h3>
                                        ${guide.experiences.map(exp => `
                                            <div class="experience-card">
                                                <div class="experience-user">${exp.user}</div>
                                                <div class="experience-text">${exp.text}</div>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
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
    
    function showSuccessModal() {
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        modal.innerHTML = `
            <div class="success-modal-content">
                <h3>Tanaman anda berhasil?</h3>
                <div class="success-modal-buttons">
                    <button class="success-btn">Berhasil</button>
                    <button class="fail-btn">Tidak</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        modal.querySelector('.success-btn').addEventListener('click', function() {
            alert('Selamat! Tanaman Anda berhasil tumbuh dengan baik!');
            modal.remove();
        });
        
        modal.querySelector('.fail-btn').addEventListener('click', function() {
            alert('Tanaman Anda gagal tumbuh. Mari coba lagi!');
            modal.remove();
        });
    }

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
                    "Hari 1-7: Muncul akar kecil",
                    "Hari 8-10: Daun pertama",
                    "Hari 11-21: Batang menguat dan daun sejati berjumlah 2-4",
                    "Hari 22-30: Tinggi tanaman 10-15 cm",
                    "(Pindahkan tanaman ke lahan tanam)",
                    "Minggu 1-4: Batang bercabang dan daun tumbuh lebat",
                    "Minggu 5-6: Tunas bunga muncul",
                    "Minggu 7-10: Bakal buah terbentuk berwarna hijau",
                    "Minggu 11-12 Buah matang dan siap dipanen"
                ]
            },
            "Cabai Merah": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Merah.jpeg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Hijau": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Hijau.jpg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Keriting": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Keriting.jpg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Gendot": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Gendot.jpg",
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
            },
            "Tomat Ceri": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Cri.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Tomat Hijau": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Hijau.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Terong Putih": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Terong Putih.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Terong Ungu": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Terong Ungu.jpg",
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

            // target list
            const targetList = document.querySelector(".target ul");
            targetList.innerHTML = "";
            plantInfo.targets.forEach((target, index) => {
                targetList.innerHTML += `
                    <li class="target-item" data-index="${index}">
                        <div class="target-status"></div>
                        <span class="target-text">${target}</span>
                        <div class="status-popup">
                            <button class="action-btn success-btn">✅ Target Terpenuhi</button>
                            <button class="action-btn fail-btn">❌ Target Tidak Terpenuhi</button>
                        </div>
                        <button class="read-article-btn">Baca Artikel</button>
                    </li>
                `;
            });

            // Handle status selection
            document.querySelectorAll('.target-status').forEach(statusIcon => {
                statusIcon.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Jika sudah checked, kembalikan ke netral
                    if (this.classList.contains('checked')) {
                        this.classList.remove('checked');
                        this.innerHTML = '';
                    } 
                    // Jika sudah failed, tampilkan popup
                    else if (this.classList.contains('failed')) {
                        const popup = this.nextElementSibling.nextElementSibling;
                        popup.style.display = 'block';
                    }
                    // Jika netral, tampilkan popup
                    else {
                        const popup = this.nextElementSibling.nextElementSibling;
                        popup.style.display = 'block';
                    }
                    
                    updateProgress();
                    updateTargetLocks();
                });
            });
        

            document.addEventListener('click', function() {
                document.querySelectorAll('.status-popup').forEach(popup => {
                    popup.style.display = 'none';
                });
            });

            // Handle success/fail selection
            document.querySelectorAll('.success-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const targetItem = this.closest('.target-item');
                    const statusIcon = targetItem.querySelector('.target-status');
                    
                    statusIcon.classList.remove('failed');
                    statusIcon.classList.add('checked');
                    statusIcon.innerHTML = '<i data-feather="check"></i>';
                    
                    this.closest('.status-popup').style.display = 'none';
                    feather.replace();
                    updateProgress();
                    updateTargetLocks();
                });
            });
            
            // Handle fail button
            document.querySelectorAll('.fail-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const targetItem = this.closest('.target-item');
                    const statusIcon = targetItem.querySelector('.target-status');
                    
                    statusIcon.classList.remove('checked');
                    statusIcon.classList.add('failed');
                    statusIcon.innerHTML = '<i data-feather="alert-circle"></i>';
                    
                    // Tampilkan tombol baca artikel
                    targetItem.querySelector('.read-article-btn').style.display = 'block';
                    this.closest('.status-popup').style.display = 'none';
                    feather.replace();
                    updateProgress();
                    updateTargetLocks();
                });
            });

            // Handle baca artikel button
            document.querySelectorAll('.read-article-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const targetText = this.closest('.target-item').querySelector('.target-text').textContent;
                    let articleUrl = "https://example.com/articles/";
                    
                    if (targetText.includes("akar kecil")) articleUrl += "perawatan-akar";
                    else if (targetText.includes("Daun pertama")) articleUrl += "daun-pertama";
                    else if (targetText.includes("daun sejati")) articleUrl += "daun-sejati";
                    
                    window.open(articleUrl, '_blank');
                });
            });

            // Lock targets below failed ones
            function updateTargetLocks() {
                const targets = document.querySelectorAll('.target-item');
                let foundFailed = false;
                
                targets.forEach(target => {
                    if (foundFailed) {
                        target.classList.add('locked');
                    } else {
                        target.classList.remove('locked');
                        if (target.querySelector('.target-status.failed')) {
                            foundFailed = true;
                        }
                    }
                });
            }

            // Update progress function
            function updateProgress() {
                const targets = document.querySelectorAll('.target-item');
                let completed = 0;
                
                targets.forEach(target => {
                    if (target.querySelector('.target-status.checked')) {
                        completed++;
                    }
                });
                
                const progress = targets.length > 0 ? (completed / targets.length) * 100 : 0;
                document.getElementById('progress-bar').style.width = `${progress}%`;
                document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
                
                if (completed === targets.length && targets.length > 0) {
                    showSuccessModal();
                }
            }

            // Tambahkan progress container
            const plantDetails = document.querySelector('.plant-details');
            const progressHTML = `
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress" id="progress-bar"></div>
                    </div>
                    <span id="progress-text">0%</span>
                </div>
                <div class="status-buttons">
                    <button class="cancel-btn">Batalkan</button>
                    <button class="fail-btn">Gagal</button>
                </div>
            `;
            plantDetails.insertAdjacentHTML('beforeend', progressHTML);
            
            // Event listeners untuk tombol status
            document.querySelector('.cancel-btn')?.addEventListener('click', function() {
                if (confirm('Apakah Anda yakin ingin membatalkan tracking tanaman ini?')) {
                    alert('Tracking tanaman dibatalkan.');
                    window.location.href = "home.html";
                }
            });
            
            document.querySelector('.fail-btn')?.addEventListener('click', function() {
                if (confirm('Apakah tanaman ini gagal tumbuh?')) {
                    alert('Status tanaman diperbarui menjadi gagal.');
                    window.location.href = "home.html";
                }
            });
            
            // Inisialisasi progress bar
            updateProgress();
            feather.replace();
        }
    }

    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }

    // Handle back button
    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }
});

// Handle profile
document.addEventListener("DOMContentLoaded", function () {
    // Logout Modal
    const logoutBtn = document.querySelector('.menu-item:last-child');
    const logoutModal = document.getElementById('logoutModal');
    const confirmBtn = document.getElementById('confirmLogout');
    const cancelBtn = document.getElementById('cancelLogout');

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.style.display = 'flex';
    });

    cancelBtn.addEventListener('click', () => {
        logoutModal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        window.location.href = "login.html";
    });

    // Avatar Upload
    const avatarUpload = document.getElementById('avatarUpload');
    const userAvatar = document.getElementById('userAvatar');
    const defaultAvatar = document.getElementById('defaultAvatar');

    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                userAvatar.src = event.target.result;
                userAvatar.style.display = 'block';
                defaultAvatar.style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    });

    // Edit Profile Modal
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const saveProfileBtn = document.getElementById('saveProfile');
    const cancelEditBtn = document.getElementById('cancelEdit');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userPhone = document.getElementById('userPhone');
    const userAddress = document.getElementById('userAddress');
    const editName = document.getElementById('editName');
    const editEmail = document.getElementById('editEmail');
    const editPhone = document.getElementById('editPhone');
    const editAddress = document.getElementById('editAddress');

    editProfileBtn.addEventListener('click', () => {
        // Fill the form with current values
        editName.value = userName.textContent;
        editEmail.value = userEmail.textContent;
        editPhone.value = userPhone.textContent;
        editAddress.value = userAddress.textContent;
        editProfileModal.style.display = 'flex';
    });

    cancelEditBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'none';
    });

    saveProfileBtn.addEventListener('click', () => {
        // Update the profile with new values
        userName.textContent = editName.value;
        userEmail.textContent = editEmail.value;
        userPhone.textContent = editPhone.value;
        userAddress.textContent = editAddress.value;
        editProfileModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === logoutModal) {
            logoutModal.style.display = 'none';
        }
        if (e.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });

    feather.replace();
});

// Handle settings
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const passwordModal = document.getElementById('passwordModal');
    const changePassword = document.getElementById('changePassword'); // Sekarang ini div
    const passwordForm = document.getElementById('passwordForm');
    const cancelBt = document.querySelector('.cancel-bt');
    const backBtn = document.querySelector('.back-btn');
    
    // Toggle modal ketika text "Change Password" diklik
    changePassword.addEventListener('click', function() {
        passwordModal.style.display = 'block';
    });
    
    // Tombol cancel
    cancelBt.addEventListener('click', function() {
        passwordModal.style.display = 'none';
    });
    
    // Handle form submission
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword !== confirmPassword) {
            alert('New password and confirmation do not match!');
            return;
        }
        
        console.log('Password change submitted:', { currentPassword, newPassword });

        passwordModal.style.display = 'none';
        this.reset();
        alert('Password changed successfully!');
    });
    
    // Back button
    backBtn.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === passwordModal) {
            passwordModal.style.display = 'none';
        }
    });
    
    const notificationToggle = document.getElementById('notificationToggle');
    notificationToggle.addEventListener('change', function() {
        console.log('Notifications:', this.checked ? 'enabled' : 'disabled');
    });
});

// Handle myTracker
let trackedPlants = [];

// Fungsi untuk menampilkan tanaman
function displayTrackedPlants() {
    const container = document.getElementById('tracked-plants');
    container.innerHTML = '';
    
    if (trackedPlants.length === 0) {
        container.innerHTML = '<p class="empty-message">Belum ada tanaman yang ditambahkan</p>';
        return;
    }
    
    trackedPlants.forEach(plant => {
        const plantElement = document.createElement('div');
        plantElement.className = 'tracked-plant';
        plantElement.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <div class="tracked-plant-info">
                <h3>${plant.name}</h3>
                <p>⏳ ${plant.duration}</p>
            </div>
            <button class="remove-plant">×</button>
        `;
        
        // Navigasi ke track.html saat card diklik
        plantElement.addEventListener('click', (e) => {
            if (!e.target.classList.contains('remove-plant')) {
                window.location.href = `track.html?plant=${encodeURIComponent(plant.name)}`;
            }
        });
        
        // Tombol hapus
        const removeBtn = plantElement.querySelector('.remove-plant');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            trackedPlants = trackedPlants.filter(p => p.name !== plant.name);
            displayTrackedPlants();
        });
        
        container.appendChild(plantElement);
    });
}

// Fungsi untuk menampilkan modal pilihan tanaman
function showPlantModal() {
    const modal = document.getElementById('plantModal');
    modal.style.display = 'block';
    
    // Daftar tanaman
    const plants = [
        { name: "Cabai Rawit", image: "Cabai Rawit.jpeg", duration: "3-4 Bulan" },
        { name: "Cabai Merah", image: "Cabai Merah.jpeg", duration: "3-4 Bulan" },
        { name: "Cabai Hijau", image: "Cabai Hijau.jpg", duration: "3-4 Bulan" },
        { name: "Cabai Keriting", image: "Cabai Keriting.jpg", duration: "4-5 Bulan" },
        { name: "Cabai Gendot", image: "Cabai Gendot.jpg", duration: "4-5 Bulan" },
        { name: "Tomat Sayur", image: "Tomat Sayur.jpg", duration: "2-3 Bulan" },
        { name: "Tomat Ceri", image: "Tomat Cri.jpg", duration: "2-3 Bulan" },
        { name: "Tomat Hijau", image: "Tomat Hijau.jpg", duration: "2-3 Bulan" },
        { name: "Terong Putih", image: "Terong Putih.jpg", duration: "3-4 Bulan" },
        { name: "Terong Ungu", image: "Terong Ungu.jpg", duration: "2-3 Bulan" }
    ];
    
    const plantList = document.getElementById('plantList');
    plantList.innerHTML = '';
    
    plants.forEach(plant => {
        const plantItem = document.createElement('div');
        plantItem.className = 'plant-item';
        plantItem.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <p>${plant.name}</p>
        `;
        
        plantItem.addEventListener('click', () => {
            trackedPlants.push(plant);
            displayTrackedPlants();
            modal.style.display = 'none';
        });
        
        plantList.appendChild(plantItem);
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const addMoreBtn = document.getElementById('addMoreBtn');
    if (addMoreBtn) {
        addMoreBtn.addEventListener('click', showPlantModal);
    }
    
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            document.getElementById('plantModal').style.display = 'none';
        });
    }
    
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('plantModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    displayTrackedPlants();
});

function saveToHistory(plantName, status) {
    const plantData = {
        name: plantName,
        image: document.querySelector(".plant-info img").src.split('/').pop(),
        startDate: document.querySelector(".plant-details p:nth-of-type(1)").textContent.replace('Start: ', ''),
        endDate: new Date().toLocaleDateString("id-ID"),
        status: status,
        duration: calculateDuration()
    };
    
    // Ambil history yang sudah ada dari localStorage
    let history = JSON.parse(localStorage.getItem('plantHistory')) || [];
    
    // Tambahkan data baru
    history.push(plantData);
    
    // Simpan kembali ke localStorage
    localStorage.setItem('plantHistory', JSON.stringify(history));
}

function calculateDuration() {
    const startText = document.querySelector(".plant-details p:nth-of-type(1)").textContent.replace('Start: ', '');
    const startDate = new Date(startText.split('/').reverse().join('-'));
    const endDate = new Date();
    
    const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                      (endDate.getMonth() - startDate.getMonth());
    
    if (diffMonths === 0) {
        const diffDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
        return diffDays + ' hari';
    } else {
        return diffMonths + ' bulan';
    }
}

// Modifikasi event listener untuk tombol-tombol status:
document.querySelector('.success-btn')?.addEventListener('click', function() {
    alert('Selamat! Tanaman Anda berhasil tumbuh dengan baik!');
    saveToHistory(plantName, 'success');
    modal.remove();
    window.location.href = "history.html";
});

document.querySelector('.fail-btn')?.addEventListener('click', function() {
    alert('Tanaman Anda gagal tumbuh. Mari coba lagi!');
    saveToHistory(plantName, 'failed');
    modal.remove();
    window.location.href = "history.html";
});

document.querySelector('.cancel-btn')?.addEventListener('click', function() {
    if (confirm('Apakah Anda yakin ingin membatalkan tracking tanaman ini?')) {
        alert('Tracking tanaman dibatalkan.');
        saveToHistory(plantName, 'cancelled');
        window.location.href = "history.html";
    }
});