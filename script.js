$(document).ready(function() {
    // task 0 setup
    console.log("jQuery is ready");

    // task 1 selectors and css
    $("body").css("font-family", "Arial, sans-serif");
    $("#main-title").text("Welcome to My Portfolio");
    $(".headline").css("color", "#e696bb");

    $("#update-greeting").click(function() {
        $(".headline").text("Hello! Thanks for visiting my portfolio.");
    });

    $("#light-theme").click(function() {
        $("body").removeClass("dark-theme");
    });

    $("#dark-theme").click(function() {
        $("body").addClass("dark-theme");
    });

    // task 2 visibility
    $("#hide-status").click(function() {
        $("#status, #fun-facts").hide();
    });

    $("#show-status").click(function() {
        $("#status, #fun-facts").show();
    });

    $("#toggle-status").click(function() {
        $("#status, #fun-facts").toggle();
    });

    // task 3 fade
    $("#fade-in").click(function() {
        $(".gallery-image").fadeIn();
    });

    $("#fade-out").click(function() {
        $(".gallery-image").fadeOut();
    });

    $("#fade-toggle").click(function() {
        $(".gallery-image").fadeToggle();
    });

    // task 4 slide 
    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideToggle();
    });

    $("#open-panels").click(function() {
        $(".slide-panel").slideDown();
    });

    $("#close-panels").click(function() {
        $(".slide-panel").slideUp();
    });

    // task 5 add and remove
    $("#add-skill").click(function() {
        const skill = $("#skill-input").val().trim();

        if (skill !== "") {
            $("#skill-list").append("<li></li>");
            $("#skill-list li").last().text(skill);
            $("#skill-input").val("");
        }
    });

    $("#prepend-skill").click(function() {
        const skill = $("#skill-input").val().trim();

        if (skill !== "") {
            $("#skill-list").prepend("<li></li>");
            $("#skill-list li").first().text(skill);
            $("#skill-input").val("");
        }
    });

    $("#remove-skill").click(function() {
        $("#skill-list li").last().remove();
    });

    // task 6 modifying attributes
    $("#change-link").click(function() {
        const link = $("#social-link");

        if (link.attr("href") === "https://github.com/khanziik/") {
            link.attr("href", "https://www.linkedin.com/");
            link.text("Visit LinkedIn");
        } else {
            link.attr("href", "https://github.com/khanziik/");
            link.text("Visit GitHub");
        }
    });

    // task 7 form interaction
    $("#visitor-name").on("input", function() {
        $("#name-output").text($(this).val());
    });

    $("#visitor-email").on("input", function() {
        $("#email-output").text($(this).val());
    });

    // task 8 basic animation
    let skillsVisible = false;
    $("#animate-skills").click(function() {
        if (skillsVisible === false) {
            $(".skill-bar").each(function() {
                const targetWidth = $(this).attr("data-width");
                $(this).animate({ width: targetWidth }, 1000);
            });

            skillsVisible = true;
        } else {
            $(".skill-bar").animate({ width: "0" }, 1000);
            skillsVisible = false;
        }
    });
});