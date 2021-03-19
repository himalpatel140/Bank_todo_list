$(document).ready(function() {

    //create account

    $('#createAccount').click(function() {
        let userName = $('#userName').val();
        let name = $('#name').val();
        console.log(userName);
        console.log(name);
        if (userName && name) {
            Bank.createAccount(userName, name);
            $('#userName').val('');
            $('#name').val('');
        }
    });

    //Add Balance

    $('#add_balance').click(function() {
        let username = $('#addBalance_un').val();
        let Amount = $('#addBalance_amt').val();
        console.log(username);
        console.log(Amount);
        if (username && Amount) {
            Bank.addBalance(username, Amount);
            $('#transactions').text(Bank.transactionList);
            $('#addBalance_amt').val('').css('background-color', 'green');
            $('#addBalance_amt').css('color', 'white');
        }

    });

    //Reseting the balance window
    $('#addBalance_reset').click(function() {
        $('#addBalance_un').val('');
        $('#addBalance_amt').val('');
    });



    //Reseting all content

    $('#reset_all').click(function() {
        $('input').val('');
        $('textarea').text('');
    });

    $('#get_allusers').click(function() {
        console.log(Bank.userNameList);
        $('#allusers').text(JSON.stringify(Bank.userList));
    });


    // user list dropdown
    let optionHtml = Bank.getUserList();
    $('#userlist_dropdown');


    // Refresh user list

    $('#refresh_user_list').click(function() {

        let list = Bank.getUserList();
        let collect = "";

        list.forEach(function(each) {
            let data = '<option>' + each.username + '</option>';
            collect = collect + data;

        });
        $('#userlist_dropdown').html(collect);
        console.log(collect);

    });

    // Replacing H1 with active user

    $('#userlist_dropdown').change(function() {
        let activeValue = $(this).val();
        console.log(activeValue);
        $("#active_user").text(activeValue);

        let userInfo = Bank.userList[activeValue];
        console.log(userInfo);
        $('#addBalance_un').val(userInfo.username);
        let userInfo_formatted = ` 
        
        name: ${userInfo.name}
        username: ${userInfo.username}
        balance: ${userInfo.balance}

        `;


        //     "My name is " + userInfo.name + "I'm from earth";
        // 'My name is ' + userInfo.name + "I'm from earth";

        // `My name is ${userInfo.name} I'm from Earth `;

        $('#transactions').text(userInfo_formatted);
    });

    // validation

    $('#input_length').keyup(function() {
        let input_con = $(this).val();
        $("#message").text('');
        if (input_con.length > 10) {
            $(this).css('background-color', 'red');
            $("#message").text('value must be less than 10');
        } else if (input_con.length > 0) {
            $(this).css('background-color', 'green');
        } else {
            $(this).css('background-color', 'white');
        }
    });

    let percentage_width = 0;
    $('#move_back').click(function() {
        console.log('moving back');
        if (percentage_width > 0) {
            percentage_width = percentage_width - 5;
            $('.progress_complete').css('width', percentage_width + "%");
            $('#progress_percent').text(percentage_width + "%")
        }
    });

    $('#move_next').click(function() {
        console.log('moving forward');
        if (percentage_width < 100) {
            percentage_width = percentage_width + 5;
            $('.progress_complete').css('width', percentage_width + "%");
            $('#progress_percent').text(percentage_width + "%")
        }
    });

    setInterval(function() {
        if (percentage_width < 100) {
            percentage_width = percentage_width + 1;
            $('.progress_complete').css('width', percentage_width + "%");
            $('#progress_percent').text(percentage_width + "%");
            if (percentage_width == 15) {
                console.log('I reach 15');
            }
        }
    }, 1000);

    setTimeout(function() {
        console.log('Thank you for waiting for 10 sec');
    }, 1000 * 10);


    setInterval(function() {
        console.log('commenting on every 5 sec');
    }, 5 * 1000);
});