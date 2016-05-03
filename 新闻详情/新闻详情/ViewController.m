//
//  ViewController.m
//  新闻详情
//
//  Created by czljcb on 16/3/29.
//  Copyright © 2016年 czljcb. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIWebView *webView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    NSURL *url = [NSURL URLWithString:@"http://c.m.163.com/nc/article/BJ63GID005178VN6/full.html"];
    
    
    [[[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        
        if (!error) {
        
            NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:nil];
            
            
            dispatch_async(dispatch_get_main_queue(), ^{
                [self loadWebView:dict];
 
            });
        
        }
        
    }] resume];
    
}

#pragma mark ******************************************z********************************************************
#pragma mark

- (void)loadWebView:(NSDictionary *)dict{
    
    NSDictionary *news = dict[@"BJ63GID005178VN6"];
    NSLog(@"%@",news);
    
    NSString *bodyHtml = news[@"body"];
    
    [self.webView loadHTMLString:bodyHtml baseURL:nil];
}

@end
