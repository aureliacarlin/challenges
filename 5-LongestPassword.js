function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
    //console.log(`str += curr_char: ${str += curr_char}`); 
    str += curr_char
    //console.log(`hash[chars[i]] = {index:i} : ${hash[chars[i]] = {index:i}}`)
    hash[chars[i]] = {index:i};
    }
    else 
    {
    if(longest_string.length <= str.length)
    {
    //console.log(`longest_string = str: ${longest_string = str}`);
    longest_string = str
    }
    var prev_dupeIndex;
    console.log(`prev_dupeIndex = hash[curr_char].index: ${prev_dupeIndex = hash[curr_char].index}`);
    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    hash = {};
    for (var j = prev_dupeIndex + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};
    }
    }
    }
    return longest_string.length > str.length ? longest_string : str;
    }
   // console.log(longest_substring_without_repeating_characters("commasgooglestringlovecoffee")); 
    
    console.log(longest_substring_without_repeating_characters("abcde")); 