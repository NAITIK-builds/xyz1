
        $(document).ready(function () {
            // var audio1 = new Audio("assets/quickquestion.mp3");
            var audio3 = new Audio("assets/congrats32.mp3");
            var tempCssClass;
            var buttonValue;
            var currentStep;

                
                setTimeout(function () {
                    $("#initTyping").remove()
                    $("#msg1").removeClass("hidden").after(typingEffect())
                    setTimeout(function () {
                        $(".temp-typing").remove()
                        $("#msg2").removeClass("hidden").after(typingEffect())
                        scrollToBottom()
                        setTimeout(function () {
                            $(".temp-typing").remove()
                            $("#msg3").removeClass("hidden").after(typingEffect())
                            scrollToBottom()
                            setTimeout(function () {
                                $(".temp-typing").remove()
                                $("#msg4").removeClass("hidden");
                                $("#msg401").removeClass("hidden");
                            }, 500)
                        }, 1800)
                    }, 1200)
                }, 500)
            

            $("button.chat-button").on("click", function () {
                currentStep = $(this).attr("data-form-step")
                buttonValue = $(this).attr("data-form-value")

                if (currentStep == 1) {
                    //scrollToBottom();
                    $("#agentBlock2 .agent-chat").prepend(typingEffect())
                    $("#msg4").addClass("hidden")
                    $("#userBlock1").removeClass("hidden")
                    scrollToBottom()
                    setTimeout(function () {
                        $("#agentBlock2").removeClass("hidden")
                        scrollToBottom()
                        setTimeout(function () {
                            $(".temp-typing").remove()
                            $("#msg6").removeClass("hidden").after(typingEffect())
                            // audio1.play();
                            scrollToBottom()
                            setTimeout(function () {
                                $(".temp-typing").remove()
                                $("#msg7").removeClass("hidden").after(typingEffect())
                                scrollToBottom()

                                setTimeout(function () {
                                    $(".temp-typing").remove()
                                    $("#msg8a").removeClass("hidden")
                                    scrollToBottom()
                                }, 500)

                            }, 500)
                        }, 500)
                    }, 500)
                }

                if (currentStep == 3) {
                    //scrollToBottom();
                    $("#agentBlock3 .agent-chat").prepend(typingEffect())
                    $("#msg8a").addClass("hidden")
                    $("#userBlock2").removeClass("hidden")
                    //scrollToBottom();
                    if (buttonValue == "No") {
                        $("#msg9no").removeClass("hidden");
                        $("#hdnApprovalStatus").val("no");

                    } else if (buttonValue == "64 and Under") {
                        $("#msg9-64andUnder").removeClass("hidden");
                        $("#hdnApprovalStatus").val("no");
                        
                    } else if (buttonValue == "74 and Older") {
                        $("#msg9-74andOlder").removeClass("hidden");
                        $("#hdnApprovalStatus").val("no");
                        
                    } else if (buttonValue == "65 - 74") {
                        $("#msg9-65to74").removeClass("hidden");
                        
                    } else {
                        $("#msg9yes").removeClass("hidden");
                    }

                    scrollToBottom()
                    setTimeout(function () {
                        $("#agentBlock3").removeClass("hidden")
                        scrollToBottom()
                        setTimeout(function () {
                            $(".temp-typing").remove()
                            $("#msg10").removeClass("hidden").after(typingEffect())
                            // audio2.play();
                            scrollToBottom()
                            setTimeout(function () {
                                $(".temp-typing").remove()
                                $("#msg11").removeClass("hidden")
                                scrollToBottom()
                            }, 500)
                        }, 500)
                    }, 500)
                }

                if (currentStep == 2) {
                    //scrollToBottom();
                    $("#agentBlock4 .agent-chat").prepend(typingEffect())
                    $("#msg401").addClass("hidden")
                    $("#userBlock3").removeClass("hidden")
                    //scrollToBottom();

                    if (buttonValue == "Yes") {
                        $("#msg12Yes").removeClass("hidden")
                    } else if (buttonValue == "No") {
                        $("#msg12No").removeClass("hidden")
                        setTimeout(function () {
                            $("#agentBlock4").removeClass("hidden")
                            scrollToBottom()
                            setTimeout(function () {
                                $(".temp-typing").remove()
                                $("#msg18").removeClass("hidden").after(typingEffect())
                                scrollToBottom()
                                setTimeout(function () {
                                    $(".temp-typing").remove()
                                    $("#msg19").removeClass("hidden")
                                    scrollToBottom()
                                    setTimeout(function () {
                                        $(".temp-typing").remove()
                                        $("#msg20").removeClass("hidden")

                                        scrollToBottom()
                                        setTimeout(function () {
                                            $("#disconnected").removeClass("hidden")
                                            scrollToBottom()
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                        return false
                    } else {
                        $("#msg12medicare").removeClass("hidden")
                        setTimeout(function () {
                            $("#agentBlock4").removeClass("hidden")
                            scrollToBottom()
                            setTimeout(function () {
                                $(".temp-typing").remove()
                                $("#msg18").removeClass("hidden").after(typingEffect())
                                scrollToBottom()
                                setTimeout(function () {
                                    $(".temp-typing").remove()
                                    $("#msg19").removeClass("hidden")
                                    scrollToBottom()
                                    setTimeout(function () {
                                        $(".temp-typing").remove()
                                        $("#msg20").removeClass("hidden")
                                        scrollToBottom()
                                        setTimeout(function () {
                                            $("#disconnected").removeClass("hidden")
                                            scrollToBottom()
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                        return false
                    }
                    scrollToBottom()
                    //

                    setTimeout(function () {
                        $("#agentBlock4").removeClass("hidden")
                        scrollToBottom()
                        setTimeout(function () {
                            $(".temp-typing").remove()
                            $("#msg13").removeClass("hidden").after(typingEffect())
                            audio3.play();
                            scrollToBottom()
                            setTimeout(function () {
                                $(".temp-typing").remove()
                                $("#msg14").removeClass("hidden").after(typingEffect())
                                scrollToBottom()
                                setTimeout(function () {
                                    $(".temp-typing").remove()
                                    $("#msg15").removeClass("hidden").after(typingEffect())
                                    scrollToBottom()
                                    setTimeout(function () {
                                        $(".temp-typing").remove()
                                        $("#msg16").removeClass("hidden").after(typingEffect())
                                        scrollToBottom()
                                        setTimeout(function () {
                                            $(".temp-typing").remove()
                                            $("#msg17").removeClass("hidden")
                                            scrollToBottom()
                                        }, 100)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    }, 500)
                }
            })

            function scrollToBottom(elementId) {
                var object = $("main")
                $("html, body").animate({
                    scrollTop: object.offset().top + object.outerHeight() - $(window).height(),
                },
                    "fast"
                )
            }
        })

        function typingEffect(cssClass) {
            string = '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">'
            string += '<div class="typing-animation">'
            string += '<div class="typing-dot"></div>'
            string += '<div class="typing-dot"></div>'
            string += '<div class="typing-dot"></div>'
            string += "</div>"
            string += "</div>"

            return string
        };

        var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        var currentDate = new Date()
        var currentDayOfWeek = daysOfWeek[currentDate.getDay()]
        var currentMonth = months[currentDate.getMonth()]
        var currentDay = currentDate.getDate()
        var currentYear = currentDate.getFullYear()
        var formattedDate =
            currentDayOfWeek + ", " + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "/" + ("0" + currentDay).slice(-2) + "/" + currentYear
        document.getElementById("currentDate").textContent = formattedDate


