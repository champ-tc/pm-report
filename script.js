function toggleOtherInput() {
    const occupationSelect = document.getElementById("occupation");
    const otherOccupationDiv = document.getElementById("other-occupation-div");
    const otherOccupationInput = document.getElementById("other-occupation");

    if (occupationSelect.value === "อื่น") {
        otherOccupationDiv.style.display = "block"; // แสดง input
        otherOccupationInput.required = true; // บังคับให้กรอก
    } else {
        otherOccupationDiv.style.display = "none"; // ซ่อน input
        otherOccupationInput.required = false; // ยกเลิกการบังคับกรอก
        otherOccupationInput.value = ""; // ล้างข้อมูลในช่อง input
    }
}

function toggleHouseCover() {
    let otherHouseCoverCheckbox = document.getElementById('otherHouseCoverCheckbox');
    let DivHouseCover = document.getElementById('DivHouseCover');
    let otherHouseCoverInput = document.getElementById('otherHouseCoverInput');

    if (otherHouseCoverCheckbox.checked) {
        DivHouseCover.style.display = 'block';
        otherHouseCoverInput.required = true;
    } else {
        DivHouseCover.style.display = 'none';
        otherHouseCoverInput.required = false;
        otherHouseCoverInput.value = "";
    }
}

function toggleOtherAirflowInput() {
    let otherOption = document.getElementById('otherAirflowOption');
    let otherAirflowDiv = document.getElementById('otherAirflowDiv');
    let otherAirflowInput = document.getElementById('otherAirflowInput');

    if (otherOption.checked) {
        otherAirflowDiv.style.display = 'block';
        otherAirflowInput.required = true;
    } else {
        otherAirflowDiv.style.display = 'none';
        otherAirflowInput.required = false;
        otherAirflowInput.value = "";
    }
}

function toggleOtherWorkInput() {
    let otherCheckbox = document.getElementById('otherWorkType');
    let otherInputDiv = document.getElementById('otherWorkDiv');
    let otherInput = document.getElementById('otherWorkInput');

    if (otherCheckbox.checked) {
        otherInputDiv.style.display = 'block';
        otherInput.required = true;
    } else {
        otherInputDiv.style.display = 'none';
        otherInput.required = false;
        otherInput.value = "";  // ล้างข้อมูลเมื่อไม่เลือก
    }
}

function toggleDiseaseSection(showDisease) {
    const diseaseSection = document.getElementById("diseaseSection");
    const smokingSection = document.getElementById("smokingSection");
    const diseaseCheckboxes = diseaseSection.querySelectorAll("input[type='checkbox']");
    const diseaseOtherText = document.getElementById("diseaseOtherText");
    const smokingRadios = smokingSection.querySelectorAll("input[type='radio']");

    if (showDisease) {
        // แสดงส่วนโรคประจำตัว
        diseaseSection.classList.remove("hidden");
        smokingSection.classList.add("hidden");
        // รีเซ็ตการเลือกของส่วนสูบบุหรี่
        smokingRadios.forEach(radio => {
            radio.checked = false;
        });
    } else {
        // ซ่อนส่วนโรคประจำตัวและล้างค่า
        diseaseSection.classList.add("hidden");
        smokingSection.classList.remove("hidden");
        diseaseCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        diseaseOtherText.value = "";
        diseaseOtherText.disabled = true;
    }
}

document.getElementById("diseaseOther").addEventListener("change", function () {
    const diseaseOtherText = document.getElementById("diseaseOtherText");
    if (this.checked) {
        diseaseOtherText.style.display = "block"; // แสดงช่องกรอก
        diseaseOtherText.disabled = false; // เปิดใช้งาน
    } else {
        diseaseOtherText.style.display = "none"; // ซ่อนช่องกรอก
        diseaseOtherText.disabled = true; // ปิดการใช้งาน
        diseaseOtherText.value = ""; // ล้างค่าที่กรอก
    }
});

function toggleOtherSourceInput() {
    let otherCheckbox = document.getElementById('sourceOther');
    let otherInput = document.getElementById('otherSourceInput');

    if (otherCheckbox.checked) {
        otherInput.style.display = "block";
        otherInput.required = true;
    } else {
        otherInput.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";  // ล้างค่าที่กรอกเมื่อไม่เลือก
    }
}

function toggleSections(hasSymptoms) {
    document.getElementById('assessmentSection').style.display = hasSymptoms ? 'none' : 'block';
    document.getElementById('respiratorySection').style.display = hasSymptoms ? 'block' : 'none';
}

function toggleCardioSection(hasSymptoms) {
    document.getElementById('noSymptomsSection').style.display = hasSymptoms ? 'none' : 'block';
    document.getElementById('symptomsSection').style.display = hasSymptoms ? 'block' : 'none';
}

function toggleOtherSymptomInput() {
    let otherCheckbox = document.getElementById('otherSymptomCheckbox');
    let otherInput = document.getElementById('otherSymptomInput');

    if (otherCheckbox.checked) {
        otherInput.style.display = "block";
        otherInput.required = true;
    } else {
        otherInput.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";
    }
}

function toggleEyeSection(hasSymptoms) {
    document.getElementById('eyeSymptomsSection').style.display = hasSymptoms ? 'block' : 'none';
    document.getElementById('noEyeSymptomsSection').style.display = hasSymptoms ? 'none' : 'block';
}

function toggleOtherSymptomInput() {
    let otherCheckbox = document.getElementById('otherSymptomCheckbox');
    let otherInput = document.getElementById('otherSymptomInput');

    if (otherCheckbox.checked) {
        otherInput.style.display = "block";
        otherInput.required = true;
    } else {
        otherInput.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";
    }
}

function toggleSkinSection(hasSymptoms) {
    document.getElementById('skinSymptomsSection').style.display = hasSymptoms ? 'block' : 'none';
    document.getElementById('noskinSymptomsSection').style.display = hasSymptoms ? 'none' : 'block';
}

function toggleSkinSection(hasSymptoms) {
    document.getElementById('skinSymptomsSection').style.display = hasSymptoms ? 'block' : 'none';
    document.getElementById('noSkinSymptomsSection').style.display = hasSymptoms ? 'none' : 'block';
}

function toggleOtherSkinSymptomInput() {
    let otherCheckbox = document.getElementById('otherSkinSymptomCheckbox');
    let otherInput = document.getElementById('otherSkinSymptomInput');

    if (otherCheckbox.checked) {
        otherInput.style.display = "block";
        otherInput.required = true;
    } else {
        otherInput.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";
    }
}


// ฟังก์ชันจัดการคำนำหน้าชื่อ
function toggleOtherPrefixInput() {
    let prefixSelect = document.getElementById('prefixSelect');
    let otherDiv = document.getElementById('otherPrefixDiv');
    let otherInput = document.getElementById('otherPrefixInput');

    if (prefixSelect.value === "อื่นๆ") {
        otherDiv.style.display = 'block';
        otherInput.required = true;
    } else {
        otherDiv.style.display = 'none';
        otherInput.required = false;
        otherInput.value = "";
    }
}

// ฟังก์ชันจัดการตำแหน่ง
function toggleOtherPositionInput() {
    let positionSelect = document.getElementById('positionSelect');
    let otherDiv = document.getElementById('otherPositionDiv');
    let otherInput = document.getElementById('otherPositionInput');

    if (positionSelect.value === "อื่นๆ") {
        otherDiv.style.display = 'block';
        otherInput.required = true;
    } else {
        otherDiv.style.display = 'none';
        otherInput.required = false;
        otherInput.value = "";
    }
}

// ฟังก์ชันจัดการระดับ
function toggleOtherLevelInput() {
    let levelSelect = document.getElementById('levelSelect');
    let otherDiv = document.getElementById('otherLevelDiv');
    let otherInput = document.getElementById('otherLevelInput');

    if (levelSelect.value === "อื่นๆ") {
        otherDiv.style.display = 'block';
        otherInput.required = true;
    } else {
        otherDiv.style.display = 'none';
        otherInput.required = false;
        otherInput.value = "";
    }
}